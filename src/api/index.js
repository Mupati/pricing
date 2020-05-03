export const addSubscriber = (name, email, chosenPackage) =>
  new Promise(function(resolve) {
    console.log(email, name, chosenPackage);
    setTimeout(
      () => resolve({ message: "Subscription Successful", status: 200 }),
      5000
    );
  });
