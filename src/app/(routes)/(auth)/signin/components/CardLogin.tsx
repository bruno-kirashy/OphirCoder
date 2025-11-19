import { IconeGoogle } from "@/app/components/Home/components/Icons/IconeGoogle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardLogin() {
  return (
    <Card className="w-full max-w-sm bg-linear-to-tl from-amber-400/6 to-amber-400/3 backdrop-blur-2xl shadow-lg border-amber-600/50">
      <CardHeader>
        <CardHeader className="flex justify-start items-center p-0 mb-5">
          <img
            className="w-13"
            src="/logo.png"
            alt="Logo da OphirCoder"
          />
          <CardTitle className="text-2xl font-poppins font-bold">
            OphirCoder
          </CardTitle>
        </CardHeader>
        <CardTitle className="text-md font-poppins">
          Entrar com sua conta.
        </CardTitle>
        <CardDescription className="text-gray-400 text-[13px]">
          Insira seu e-mail abaixo para acessar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="digiteSeuEmail@example.com"
                className="text-[12px] border-amber-600/20 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center text-[12px]">
                <Label htmlFor="password">Senha</Label>
                <a
                  href="/ "
                  className="ml-auto inline-block text-[13px] underline-offset-4 hover:underline text-gray-400 hover:text-amber-500 transition-colors duration-100"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                className="border-amber-600/20 focus:outline-none focus:border-transparent focus:ring-amber-600"
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full font-extrabold border border-orange-500/40 cursor-pointer transition-colors bg-linear-to-tr from-orange-500/85 to-amber-400/5 hover:to-orange-500 hover:from-amber-400/60 duration-800"
        >
          Entrar
        </Button>
        <Button
          variant="outline"
          className="w-full border-orange-500/40 text-white bg-linear-to-tr from-amber-400/15 to-amber-400/3 hover:to-orange-500/80 hover:from-amber-400/40 transition-colors duration-800 cursor-pointer"
        >
          <IconeGoogle />
          Entrar com Google
        </Button>
      </CardFooter>
      <CardAction>
        <Button
          variant="link"
          className="cursor-pointer ml-2.5 -my-10 text-[13px] text-gray-400 hover:text-amber-500 transition-colors duration-100"
        >
          <a
            href="/signup"
            className="ml-auto inline-block text-[13px] underline-offset-4 hover:underline text-gray-400 hover:text-amber-500 transition-colors duration-100"
          >
            Criar conta
          </a>
        </Button>
      </CardAction>
    </Card>
  );
}
