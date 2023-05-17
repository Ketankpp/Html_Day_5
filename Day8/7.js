function greetUser(name) {
  const userName = name || 'Guest';
  console.log(`Hello, ${userName}!`);
}
greetUser(`manish`,`ketan`);
greetUser();
greetUser(`ketan`);