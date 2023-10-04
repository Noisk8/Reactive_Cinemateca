  s0.initVideo("https://raw.githubusercontent.com/Noisk8/Reactive_Cinemateca/main/videos/prueba_1.mp4");
src(s0) 
  //.colorama(() => a.fft[2] * 0.1) 
  //.scrollX(() => a.fft[2] * 0.1,0,1 )
  //.scrollY(() => a.fft[2] * 0.5, 0,2)
.thresh(() => a.fft[1] * 0.5,0.04) 
  
  .out()


