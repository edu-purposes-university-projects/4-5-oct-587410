import prompt from "prompt";

prompt.start();

prompt.get(
  ["name", "surname", "age", "studentId", "phoneNo"],
  function (err, result) {
    if (err) {
      console.error(err);
      return;
    }

    const name = result?.name as string;
    const surname = result?.surname as string;
    const age = parseInt(result?.age as string);
    const studentId = result?.studentId as string;
    const phoneNo = result?.phoneNo as string;

    console.log(
      `Hello ${name} ${surname}, you are ${age} years old. Your student ID is ${studentId} and your phone number is ${phoneNo}.`
    );
  }
);
