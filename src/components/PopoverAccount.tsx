import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Popover,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { RiLogoutBoxLine } from "@remixicon/react";

interface Props extends PopoverProps {}

export const PopoverAccount = ({ ...rest }: Props) => {
  return (
    <Popover trigger="hover" {...rest}>
      <PopoverTrigger>
        <HStack alignItems="center" cursor={"pointer"}>
          <Avatar
            name={"Admin"}
            color={"blue.400"}
            src={""}
            objectFit={"cover"}
            ml={"4px"}
          />

          <Box hideBelow="md" textAlign={"left"}>
            <Text fontWeight={"semibold"}>Admin</Text>
            <Text fontSize={"sm"} color={"gray.600"}>
              Administrator
            </Text>
          </Box>
        </HStack>
      </PopoverTrigger>

      <PopoverContent
        rounded={0}
        border={"none"}
        w={"auto"}
        shadow={"none"}
        bg={"transparent"}
      >
        <Box
          w={"240px"}
          roundedBottom={2}
          maxH={"80vh"}
          overflowY={"auto"}
          bg={useColorModeValue("white", "black")}
          mr={{ base: 0, md: 2, xl: 0 }}
          shadow={"md"}
          borderBottomRadius={["md", null, "lg"]}
        >
          <VStack w={"100%"} p={2} align={"stretch"}>
            <Button
              variant={"ghost"}
              colorScheme="red"
              leftIcon={<Icon as={RiLogoutBoxLine} />}
            >
              Logout
            </Button>
          </VStack>
        </Box>
      </PopoverContent>
    </Popover>
  );
};
