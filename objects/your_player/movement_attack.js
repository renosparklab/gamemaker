/*
	This should be running as a code block action on the "Step" event.
*/

{
    if(keyboard_check(vk_right) && place_free(x+3,y)) {
	  //move 3 right (x coordinate)
	  x+=3;
	  
	  //If you have a running sprite, set sprite_index = <YOUR SPRITE NAME>
      sprite_index = spr_player_run;
      image_speed = .2;
      image_xscale = 1;
    }

    if(keyboard_check(vk_left) && place_free(x-3,y)) {
	  //move three left (x coordinate)
      x-=3;
	  
	  //If you have a running sprite, set sprite_index = <YOUR SPRITE NAME>
      sprite_index = spr_player_run;
      image_speed = .2;
	  //if you want to invert your sprite for left and right running
      image_xscale = -1;
    }

    if(keyboard_check(vk_up) && place_free(x,y-3)) {
	  //move 3 up (y coordinate)
      y-=3;
	  
	  //If you have a running sprite, set sprite_index = <YOUR SPRITE NAME>
      sprite_index = spr_player_run;
      image_speed = .2;
      image_xscale = 1;
    }

    if(keyboard_check(vk_down) && place_free(x,y+3)) {
	  //move 3 down (y coordinate)
      y+=3;
	  
	  //If you have a running sprite, set sprite_index = <YOUR SPRITE NAME>
      sprite_index = spr_player_run;
      image_speed = .2;
      image_xscale = 1;
    }

	// Check if the keyboard space key is down
    if(keyboard_check(vk_space) ) {
		//change the sprite to an attacking sprite with image_speed of.5
       sprite_index = spr_player_attack;
       image_speed = .5;
    }

	//If no directions are being pressed, set the sprite back to standing (this is only needed if you have a running sprite setup)
    if(!keyboard_check(vk_right) && !keyboard_check(vk_left) &&  !keyboard_check(vk_up) && !keyboard_check(vk_down))
    {
        image_speed = 0;
        sprite_index = spr_player_stand;
    }
}