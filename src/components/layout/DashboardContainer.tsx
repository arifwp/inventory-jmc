import { HStack, Icon, Show, StackProps, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { sidebarList } from "../../constants/navigationList";
import { SidebarButton } from "../SidebarButton";
import Header from "../Header";

interface Props extends StackProps {
  children: any;
}

const fadeText = keyframes`  
  0% {
        opacity: 0;
    }

    1% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const DashboardContainer = ({ children, ...rest }: Props) => {
  return (
    <>
      <Header />

      <HStack
        className="dashboard-container"
        w={"100%"}
        h={"100%"}
        minH={"calc(100dvh - 60px)"}
        align={"start"}
        overflowX={"hidden"}
        overflowY={"auto"}
        {...rest}
      >
        <Show above="lg">
          <VStack
            className="sidebar"
            w={"60px"}
            h={"calc(100dvh - 60px)"}
            p={4}
            transition={"200ms"}
            _hover={{ width: "180px" }}
            spacing={4}
            zIndex={99}
            position={"fixed"}
            role="group"
          >
            <VStack w={"100%"}>
              {sidebarList.map((item) => (
                <SidebarButton key={item.id} to={item.to}>
                  <HStack
                    h={"20px"}
                    whiteSpace={"nowrap"}
                    alignItems={"center"}
                  >
                    <Icon
                      as={item.icon}
                      w={"100%"}
                      maxW={"16px"}
                      fontSize={[12, null, 14]}
                    />

                    <Text
                      fontSize={[10, null, 12]}
                      fontWeight={"semibold"}
                      display={"none"}
                      opacity={0}
                      animation={`${fadeText} 200ms linear`}
                      _groupHover={{
                        display: "block",
                        opacity: 1,
                      }}
                    >
                      {item.name}
                    </Text>
                  </HStack>
                </SidebarButton>
              ))}
            </VStack>
          </VStack>
        </Show>

        {children}
      </HStack>
    </>
  );
};
