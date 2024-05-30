import { MdArrowBackIosNew } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const UserProfile = () => {
  return (
    <div className="ml-4 flex items-center justify-between gap-x-2">
      <div className="flex items-center justify-between gap-x-2">
        <div className="rounded-full bg-border p-1">
          <CgProfile className=" text-4xl" />
        </div>
        <div className="text-[0.8rem]">
          <p className="font-semibold">kenny Daglish</p>
          <p>8890...98999</p>
        </div>
      </div>

      <MdArrowBackIosNew className="-rotate-90 transform cursor-pointer text-xl" />
    </div>
  );
};

export default UserProfile;
