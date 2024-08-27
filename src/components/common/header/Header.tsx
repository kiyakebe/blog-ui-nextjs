import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-center h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <Link href="#" prefetch={false} className="">
            <Image src="/logo.png" width={200} height={200} alt="A2SV" />
            <span className="sr-only">A2SV Blogs</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Teams
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Success Stories
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About Us
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Blogs
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Get Involved
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image src="/logo.png" width={150} height={100} alt="A2SV" />
        <span className="sr-only">A2SV Blogs</span>
      </Link>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-headertext font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
              prefetch={false}
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-headertext font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
              prefetch={false}
            >
              Teams
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-headertext font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
              prefetch={false}
            >
              Success Stroies
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-headertext font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
              prefetch={false}
            >
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/blogs"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-headertext font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
              prefetch={false}
            >
              Blogs
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-headertext font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 "
              prefetch={false}
            >
              Get Involved
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-auto flex gap-2">
        <Button className="font-bold bg-slate-50 text-black">Login</Button>
        <Button className="bg-basecolor text-white">Donate</Button>
      </div>
    </header>
  );
};

export default Header;
