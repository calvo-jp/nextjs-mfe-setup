import { Box, Button, chakra, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export default function Login() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<z.infer<typeof schema>>(
    {
      shouldFocusError: true,
      shouldUnregister: true,
      resolver: zodResolver(schema),
      defaultValues: {
        email: "",
      },
    },
  );

  return (
    <Box>
      <Box>
        <chakra.form
          noValidate
          onSubmit={handleSubmit(async (data) => {
            const result = await signIn("credentials", {
              ...data,
              redirect: false,
            });

            if (!result.error) await router.push("/");
          })}
        >
          <Input type="email" {...register("email")} />
          <Button
            disabled={formState.isSubmitting}
            isLoading={formState.isSubmitting}
          >
            Get OTP Code
          </Button>
        </chakra.form>
      </Box>
    </Box>
  );
}
