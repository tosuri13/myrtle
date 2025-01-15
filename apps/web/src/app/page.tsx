import { AppendButton } from "@/features/Lament/components/AppendButton";
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";
import { Timeline } from "@/features/Lament/components/Timeline";
import { Profile } from "@/features/Profile/components/Profile";

export default function AppPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <Profile />
      <Timeline />
      <LamentAppendDialog>
        <AppendButton className="fixed bottom-[16px] right-[16px] md:hidden" />
      </LamentAppendDialog>
    </div>
  );
}
