import { Profile } from "@/features/Profile/components/Profile";
import { Timeline } from "@/features/Timeline/components/Timeline";

export default function AppPage() {
  return (
    <div className="flex h-auto w-full flex-col">
      <Profile />
      <Timeline />
    </div>
  );
}
