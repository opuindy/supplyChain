import UserProfile from "./UserProfile";

const DashboardHeader = () => {
  return (
    <div className="m-auto flex w-full items-center justify-between">
      <div className="h-8 w-[400px] rounded-full bg-lightGray"></div>
      <div className="flex items-center justify-between gap-x-2">
        <div className="h-9 w-9 rounded-full bg-border"></div>
        <div className="h-9 w-9 rounded-full bg-border"></div>
        <UserProfile />
      </div>
    </div>
  );
};

export default DashboardHeader;
