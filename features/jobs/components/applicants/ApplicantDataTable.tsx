"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { toast } from "sonner";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import supabase from "@/lib/supabase/client";
import { applicationStatus } from "@/constants";
import { ApplicantStatusType, JobApplicationType } from "@/types";
import { useUpdateApplicationStatus } from "@/features/jobs/api/useUpdateApplication";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: any[];
  jobId: string;
  recruiterId: string;
}

export function ApplicantDataTable<TData, TValue>({
  columns,
  data,
  jobId,
  recruiterId,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const updateStatusMutation = useUpdateApplicationStatus();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const handlePreviewResume = async () => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      toast.error("Please select a row");
      return;
    }

    if (table.getFilteredSelectedRowModel().rows.length > 1) {
      toast.error("Please select only one row");
      return;
    }
    const publicUrl: any =
      table.getFilteredSelectedRowModel().rows[0].original.candidateUserId[0]
        .candidateInfo.resume;
    const { data } = supabase()
      .storage.from("job-board")
      .getPublicUrl(publicUrl);

    const a = document.createElement("a");
    a.href = data.publicUrl;
    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleUpdateJobStatus = async (currentStatus: ApplicantStatusType) => {
    if (table.getFilteredSelectedRowModel().rows.length === 0) {
      toast.error("Please select a row");
      return;
    }

    if (table.getFilteredSelectedRowModel().rows.length > 1) {
      toast.error("Please select only one row");
      return;
    }

    const selectedRow = table.getFilteredSelectedRowModel().rows[0];
    const applicationId = selectedRow.original._id;
    const status = selectedRow.original.status;
    const applicationInfo = selectedRow.original.candidateUserId[0];

    if (
      currentStatus === applicationStatus.SELECTED &&
      status === applicationStatus.SELECTED
    ) {
      toast.error("Candidate has already been selected");
      return;
    }
    if (
      currentStatus === applicationStatus.REJECTED &&
      status === applicationStatus.REJECTED
    ) {
      toast.error("Candidate has already been rejected");
      return;
    }

    const applicationData: JobApplicationType = {
      recruiterId,
      name: applicationInfo.candidateInfo.name,
      email: applicationInfo.email,
      candidateUserId: applicationInfo._id,
      status: currentStatus,
      jobId,
    };

    updateStatusMutation.mutate({
      applicationId,
      application: applicationData,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter names..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div>
          <Button onClick={handlePreviewResume}>Preview Resume</Button>
        </div>
        <div>
          <div className="flex gap-4">
            <Button
              onClick={() => handleUpdateJobStatus(applicationStatus.SELECTED)}
            >
              Select
            </Button>
            <Button
              variant="outline"
              onClick={() => handleUpdateJobStatus(applicationStatus.REJECTED)}
            >
              Reject
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="px-0">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </div>
  );
}
