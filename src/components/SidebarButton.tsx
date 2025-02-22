import {
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  NavLink as ReactLink,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

interface Props extends LinkProps {
  children: any;
  to: string;
  end?: any;
  isDrawer?: boolean;
}

export const SidebarButton = ({
  children,
  to,
  end,
  isDrawer = false,
  ...rest
}: Props) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: end ?? false });

  return (
    <ChakraLink
      end={end}
      className="sidebar-button"
      w={"100%"}
      as={ReactLink}
      to={to}
      p={1.5}
      borderRadius={"md"}
      textDecoration={"none"}
      display={"flex"}
      flexDirection={"column"}
      _hover={{ bgColor: useColorModeValue("#ebedf0", "#ebedf020") }}
      _activeLink={
        match
          ? {
              bg: "red.400",
              color: "white",
              paddingX: isDrawer ? 3 : undefined,
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </ChakraLink>
  );
};
