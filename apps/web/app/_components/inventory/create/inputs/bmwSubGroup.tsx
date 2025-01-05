import { Input } from "@repo/ui/components/input";
import React from "react";

interface BMWSubGroupProps {
  bmwSubGroup: number | undefined;
  setBMWSubGroup: (value: number | undefined) => void;
}

const BMWSubGroup = ({ bmwSubGroup, setBMWSubGroup }: BMWSubGroupProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-sm text-white">Sub Group</h1>
      <Input
        maxLength={2}
        type="number"
        placeholder={"99"}
        onChange={(event) =>
          setBMWSubGroup(Number.parseInt(event.target.value))
        }
        value={
          bmwSubGroup !== undefined && !isNaN(bmwSubGroup) ? bmwSubGroup : ""
        }
        className="border-primary placeholder:text-white/30 text-white"
      />
    </div>
  );
};

export default BMWSubGroup;
