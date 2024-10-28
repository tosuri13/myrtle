import { AppendButton } from "@/features/Lament/components/AppendButton";
import { Timeline } from "@/features/Lament/components/Timeline";
import { Profile } from "@/features/Profile/components/Profile";

export default function AppPage() {
  return (
    <div className="flex w-full flex-col">
      <Profile />
      <Timeline />
      <AppendButton className="fixed bottom-[16px] right-[16px] md:hidden" />
    </div>
  );
}
