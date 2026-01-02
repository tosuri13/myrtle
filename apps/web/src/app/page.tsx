import { LamentAppendButton } from "@/features/Lament/components/LamentAppendButton";
import { LamentAppendDialog } from "@/features/Lament/components/LamentAppendDialog";
import { Timeline } from "@/features/Lament/components/Timeline";
import { Profile } from "@/features/Profile/components/Profile";

export default function AppPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <Profile />
      <Timeline />
      <LamentAppendDialog>
        <LamentAppendButton className="fixed right-[16px] bottom-[16px] z-10" />
      </LamentAppendDialog>
    </div>
  );
}
