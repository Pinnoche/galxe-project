export const metadata = {
  title: "Landing Page",
  description: "Built by learn tech Africa",
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-[100%]">{children}</main>;
}
