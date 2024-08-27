import React from "react";

const teams: string[] = ["Board Member", "Advisor/Mentor", "Excutives", "Staffs"];

const Teams = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Teams</h3>
      {teams.map((team) => (
        <p className="text-textcolor text-xl my-3" key={team}>{team}</p>
      ))}
    </div>
  );
};

export default Teams;
