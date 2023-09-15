 const users = {
  users: [
    {
      id: 1,
      name: "John Doe",

      username: "johndoe",
      password: "password123",
      bookedSlots: [
        {
          venue: "Tennis Court A",
          time: "09:00 AM - 10:00 AM",
        },
        {
          venue: "Pickleball Court A",
          time: "10:00 AM - 11:00 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",

      username: "janesmith",
      password: "securepassword",
      bookedSlots: [
        {
          venue: "Tennis Court B",
          time: "10:00 AM - 11:00 AM",
        },
      ],
    },
    {
      id: 3,
      name: "Alice Johnson",

      username: "alicej",
      password: "12345",
      bookedSlots: [
        {
          venue: "Basketball Court A",
          time: "09:00 AM - 10:00 AM",
        },
        {
          venue: "Basketball Court A",
          time: "12:00 PM - 01:00 PM",
        },
      ],
    },
    {
      id: 4,
      name: "Bob Brown",

      username: "bobbrown",
      password: "strongpassword",
      bookedSlots: [],
    },
  ],
};
export default users