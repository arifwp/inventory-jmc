import {
  Button,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useScreenWidth from "../libs/useScreenWidth";

const Login = () => {
  const sw = useScreenWidth();
  const navigate = useNavigate();

  return (
    <VStack w={"full"} h={"100dvh"}>
      <SimpleGrid w={"full"} h={"full"} columns={sw > 1024 ? 2 : 1} gap={4}>
        <VStack my={"auto"} p={8} align={"stretch"}>
          <Stack
            w={"full"}
            flexDir={["column", null, "row"]}
            justify={"center"}
            align={"center"}
          >
            <Image
              src="/assets/jmc-logo.jpeg"
              w={"full"}
              maxW={"100px"}
              objectFit={"contain"}
            />

            <VStack gap={0} align={"stretch"}>
              <Text fontSize={"2xl"} color={"blue.400"} fontWeight={"semibold"}>
                Aplikasi Pengelolaan Barang
              </Text>

              <Text>PT JMC Indonesia</Text>
            </VStack>
          </Stack>

          <Text
            mt={4}
            fontSize={"xl"}
            fontWeight={"semibold"}
            color={"blue.400"}
          >
            LOGIN
          </Text>
          <Text>
            Selamat Datang, silahkan masukkan username dan password anda!
          </Text>

          <Input />
          <Input />

          <Button colorScheme="blue" onClick={() => navigate("/dashboard")}>
            Masuk
          </Button>
        </VStack>

        {sw > 1024 && (
          <VStack>
            <Image
              src="/assets/inventory.jpeg"
              w={"100%"}
              h={"100dvh"}
              objectFit={"cover"}
              alt="Business"
            />
          </VStack>
        )}
      </SimpleGrid>
    </VStack>
  );
};

export default Login;
