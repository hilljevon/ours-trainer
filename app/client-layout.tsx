"use client";

import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger,
    SidebarInset,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { name: "Dashboard", href: "/" },
        { name: "AD", href: "/AD" },
        { name: "DCP", href: "/DCP" },
        { name: "DCT", href: "/DCT" },
        { name: "CCR", href: "/CCR" },
        { name: "Stability", href: "/Stability" },
        { name: "SCAN", href: "/SCAN" },
    ];

    return (
        <SidebarProvider defaultOpen={false}>
            <div className="flex min-h-screen w-full">
                {/* Sidebar */}
                <Sidebar
                    side="left"
                    variant="sidebar"
                    collapsible="offcanvas"
                    className="bg-white border-r"
                >
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Training Navigation</SidebarGroupLabel>
                            <SidebarMenu>
                                {navItems.map((item) => (
                                    <SidebarMenuItem key={item.name}>
                                        <SidebarMenuButton asChild isActive={pathname === item.href}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "hover:text-indigo-600",
                                                    pathname === item.href && "text-indigo-600 font-medium"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>

                {/* Main Content */}
                <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center justify-between border-b px-6 py-3 bg-gray-50">
                        <div className="flex items-center gap-3">
                            <SidebarTrigger className="text-gray-700" />
                            <h1 className="text-lg font-semibold text-gray-800">
                                Analyst Trainer
                            </h1>
                        </div>
                    </div>

                    <main className="flex-1 bg-gray-50 w-full overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>

    );
}
