/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yusuf Ahmed
 * Created on: Apr 2026
 * This program counts down from 4 with neopixles
*/

let countdown = 0
input.onButtonPressed(Button.A, function () {
   
    // Start at 4
  
    countdown = 4

    // Loop as long as countdown is 0 or higher
   
    while (countdown >= 0) {
       
        // Clear previous lights so they don't stack
       
        robotbit.rgb().clear()
    
        // Show the number on the micro:bit LED grid
        
        basic.showNumber(countdown)
        
        // Light up the number of pixels matching the countdown value
        
        robotbit.rgb().range(0, countdown).showColor(neopixel.colors(NeoPixelColors.Red))
        
        // Wait 1 second
       
        basic.pause(1000)
        
        // Decrease the countdown by 1
        
        countdown += -1
    }
    // Clean up when finished
    
    basic.clearScreen()
    robotbit.rgb().clear()
})