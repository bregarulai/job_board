"use client";

import { CustomFormFieldProps, formFieldType } from "@/constants";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  const { fieldType, placeholder } = props;

  switch (fieldType) {
    case formFieldType.INPUT:
      return (
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className="h-11 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </FormControl>
      );

    case formFieldType.FILE:
      return (
        <FormControl>
          <FormLabel
            htmlFor={field.name}
            className="text-[14px] leading-[18px] font-medium flex items-center gap-3 mx-auto mt-6 text-center border-2 border-dashed bg-gray-100 border-gray-300 rounded-lg cursor-pointer"
          >
            <h2>{field.name}</h2>
            <Input
              id={field.name}
              onChange={field.onChange}
              type="file"
              {...field}
            />
          </FormLabel>
        </FormControl>
      );

    default:
      break;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-[14px] leading-[18px] font-medium">
              {label}
            </FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
