let user = {
  name: "jhone",
  position: "SDE",
  phoneNumber: "3242323423",
  work: () => {
    console.log("just started the work");
  },
};

user.position; //O(1)
user.company = "abc.pvt.ltd"; //O(1)
console.log(user)


const a = new Map();
const b = new Set();