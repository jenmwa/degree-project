import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { INavigation } from "app/_models/INavigation";

export function useMenuOptions() {
  const pathname = usePathname();
  const isDashboardRoute = pathname === "/admin/dashboard";
  const isRequestsRoute = pathname === "/admin/dashboard/requests";


  const [navigation, setNavigation] = useState<INavigation[]>([]);

  useEffect(() => {
    if (isDashboardRoute) {
      setNavigation([
        { name: "Ändra Produkter", href: "/admin/dashboard" },
        { name: "Förfrågningar", href: "/admin/dashboard/requests" },

      ]);
    } else if (isRequestsRoute) {
      setNavigation([
        { name: "Ändra Produkter", href: "/admin/dashboard" },
        { name: "Förfrågningar", href: "/admin/dashboard/requests" },

      ])
    }
    else {
      setNavigation([
        { name: "Hem", href: "/" },
        { name: "Emma", href: "/#emma" },
        { name: "Kontakt", href: "/#contact" },
      ]);
    }
  }, [isDashboardRoute, isRequestsRoute]);

  let linkText = "Buketter";
  let href = "/buketter";

  if (pathname === "/buketter") {
    linkText = "Till Startsidan";
    href = "/";
  }
  if (pathname === "/admin/dashboard") {
    linkText = "Logga ut";
    href = '/';
  }
  if (pathname === "/admin/dashboard/requests") {
    linkText = "Logga ut";

    href = '/';
  }

  return { navigation, linkText, href };
}

