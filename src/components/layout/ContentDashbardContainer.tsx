import { StackProps, VStack } from "@chakra-ui/react";
import useScreenWidth from "../../libs/useScreenWidth";

interface Props extends StackProps {
  children: any;
  label?: string;
  isSubPage?: boolean;
}

export const ContentDashboardContainer = ({
  children,
  label,
  isSubPage,
  ...rest
}: Props) => {
  const sw = useScreenWidth();

  return (
    <VStack
      className="content-dashboard-container"
      w={"100%"}
      h={"100%"}
      minH={"calc(100dvh - 60px)"}
      maxW={sw > 992 ? "calc(100% - 60px)" : undefined}
      ml={"auto"}
      justify={"start"}
      overflowY={"auto"}
      letterSpacing={"wider"}
      {...rest}
    >
      {children}
    </VStack>
  );
};
