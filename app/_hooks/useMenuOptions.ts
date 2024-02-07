import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { INavigation } from "app/_models/INavigation";

export function useMenuOptions() {
  const pathname = usePathname();
  const isDashboardRoute = pathname === "/admin/dashboard";

  const [navigation, setNavigation] = useState<INavigation[]>([]);

  useEffect(() => {
    if (isDashboardRoute) {
      setNavigation([
        { name: "Produkter", href: "/admin/dashboard" },
        { name: "Förfrågningar", href: "/admin/requests" },
        { name: "Hemsidans info", href: "/admin/settings" },
      ]);
    } else {
      setNavigation([
        { name: "Hem", href: "/" },
        { name: "Emma", href: "/#emma" },
        { name: "Kontakt", href: "/#contact" },
      ]);
    }
  }, [isDashboardRoute]);

  let linkText = "Buketter";
  let href = "/buketter";

  if (pathname === "/buketter") {
    linkText = "Till Startsidan";
    href = "/";
  }
  if (pathname === "/admin/dashboard") {
    linkText = "Logga ut";

    href = '';
  }

  return { navigation, linkText, href };
}

