import BaseLayoutHome from "@/components/Home/BaseLayoutHome";

export default function HomeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <BaseLayoutHome>
      {children}
      </BaseLayoutHome>
    );
  }