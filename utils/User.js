const User = [
  {
    id: process.env.USER_ID,
    name: process.env.USER_NAME,
    /* email: 'abc@gmail.com',
    password: '123456', */
    email: process.env.EMAIL_USER,
    password: process.env.GOOGLE_SECRET,
    role: 'admin',
  },
];
export default User;
