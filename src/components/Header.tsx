import { HStack, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PopoverAccount } from "./PopoverAccount";
import { RiNotification2Line } from "@remixicon/react";

const Header = () => {
  return (
    <HStack
      className="root-headers"
      as="header"
      w={"100%"}
      h={"60px"}
      p={4}
      top={0}
      left={0}
      position={"sticky"}
      zIndex={999}
      justify={"space-between"}
    >
      <HStack as={Link} to="/">
        <Image
          src={"/assets/jmc-logo.jpeg"}
          w={"30px"}
          h={"30px"}
          objectFit={"contain"}
        />

        <Text
          textAlign={{ base: "center", md: "left" }}
          fontFamily={"heading"}
          fontWeight={"semibold"}
        >
          JMC Indonesia
        </Text>
      </HStack>

      <HStack gap={4}>
        <IconButton
          aria-label="notification"
          icon={<Icon as={RiNotification2Line} w={"40px"} />}
          size={"md"}
          p={0}
        />
        <PopoverAccount />
      </HStack>
    </HStack>
  );
};

export default Header;
