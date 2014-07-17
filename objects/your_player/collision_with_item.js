/*

Set this code as a code block "action" on the "collision with <YOUR OTHER OBJECT>" event.

If you create an item sprite/object and you want to pick it up. This will remove the item from the game
room once you run into it.

I will add more to code to show what happens when you actually pick up the item to change your sprite
or add a variable (like a power up, XP points, etc)

*/

//With(other) means that we are going to run this code on the "other" object that we are colliding with.
//This code is running on the player, so other will always be the item you collided with
with(other) {
  instance_destroy();
}    