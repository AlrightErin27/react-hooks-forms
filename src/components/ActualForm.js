import React from "react";

function ActualForm({
  firstName,
  lastName,
  handleOnChangeFirstName,
  handleOnChangeLastName,
}) {
  return (
    <form>
      <input type="text" value={firstName} onChange={handleOnChangeFirstName} />
      <input type="text" value={lastName} onChange={handleOnChangeLastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ActualForm;
