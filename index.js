function BoardMember(name, homeState, training) {
  this.veto = "No, I must disagree";
  this.approve = "You can do that!";
  this.doCharity = "I like to help people.";
  this.releasePressStatement = "You will see great things from Scuber.";
  this.sayHi = `Hi, my name is ${name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}
