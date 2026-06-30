import type { Metadata } from "next";
import { RoboticsContent } from "@/components/sections/robotics-content";

export const metadata: Metadata = {
  title: "3009H Heroic Robotics — VEX Worlds case study",
  description:
    "Case study: lead programmer, driver, and notebooker on a Worlds-qualified VEX V5 team. C++ autonomy, odometry, a PID auto-tuner, CAD drivetrain design, and the engineering notebook.",
  alternates: { canonical: "/work/robotics" },
  openGraph: {
    title: "3009H Heroic Robotics — VEX Worlds case study",
    description:
      "C++ autonomy, a PID auto-tuner that cut tuning to minutes, CAD drivetrain design, and a Design Award notebook.",
    url: "/work/robotics",
    type: "article",
  },
};

export default function RoboticsPage() {
  return <RoboticsContent />;
}
