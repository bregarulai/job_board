import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CommonCardProps } from "@/types";

const CommonCard = ({
  title,
  icon,
  companyName,
  description,
  footerContent,
  location,
  type,
}: CommonCardProps) => {
  return (
    <Card className="flex bg-gray-100 flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10">
      <CardHeader className="p-0">
        {icon ? icon : null}
        {title ? (
          <CardTitle className="text-xl max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-800 leading-tight ">
            {title}
          </CardTitle>
        ) : null}

        <CardDescription className="text-gray-500 line-clamp-1">
          <span className="grid">
            {!!companyName && (
              <span className="text-gray-500">{companyName}</span>
            )}
            {!!location && (
              <span className="text-gray-500 !text-sm">{location}</span>
            )}
            {!!type && <span className="text-gray-500">{type}</span>}
          </span>
        </CardDescription>
      </CardHeader>
      {!!description && (
        <CardContent className="p-0">
          <p className="text-gray-500 line-clamp-5">{description}</p>
        </CardContent>
      )}
      <CardFooter className="p-0 mt-auto">{footerContent}</CardFooter>
    </Card>
  );
};

export default CommonCard;
