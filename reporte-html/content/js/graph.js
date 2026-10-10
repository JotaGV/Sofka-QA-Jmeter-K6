/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 340.0, "minX": 0.0, "maxY": 2203.0, "series": [{"data": [[0.0, 340.0], [0.1, 340.0], [0.2, 340.0], [0.3, 340.0], [0.4, 341.0], [0.5, 341.0], [0.6, 341.0], [0.7, 341.0], [0.8, 343.0], [0.9, 343.0], [1.0, 343.0], [1.1, 343.0], [1.2, 343.0], [1.3, 344.0], [1.4, 344.0], [1.5, 344.0], [1.6, 344.0], [1.7, 344.0], [1.8, 344.0], [1.9, 344.0], [2.0, 345.0], [2.1, 345.0], [2.2, 345.0], [2.3, 345.0], [2.4, 346.0], [2.5, 346.0], [2.6, 346.0], [2.7, 346.0], [2.8, 346.0], [2.9, 346.0], [3.0, 346.0], [3.1, 346.0], [3.2, 346.0], [3.3, 346.0], [3.4, 346.0], [3.5, 346.0], [3.6, 347.0], [3.7, 347.0], [3.8, 347.0], [3.9, 347.0], [4.0, 347.0], [4.1, 347.0], [4.2, 347.0], [4.3, 347.0], [4.4, 348.0], [4.5, 348.0], [4.6, 348.0], [4.7, 348.0], [4.8, 348.0], [4.9, 348.0], [5.0, 348.0], [5.1, 348.0], [5.2, 349.0], [5.3, 349.0], [5.4, 349.0], [5.5, 349.0], [5.6, 349.0], [5.7, 349.0], [5.8, 349.0], [5.9, 349.0], [6.0, 349.0], [6.1, 349.0], [6.2, 349.0], [6.3, 349.0], [6.4, 350.0], [6.5, 350.0], [6.6, 350.0], [6.7, 350.0], [6.8, 350.0], [6.9, 350.0], [7.0, 350.0], [7.1, 350.0], [7.2, 350.0], [7.3, 350.0], [7.4, 350.0], [7.5, 350.0], [7.6, 350.0], [7.7, 350.0], [7.8, 350.0], [7.9, 350.0], [8.0, 350.0], [8.1, 350.0], [8.2, 350.0], [8.3, 350.0], [8.4, 351.0], [8.5, 351.0], [8.6, 351.0], [8.7, 351.0], [8.8, 351.0], [8.9, 351.0], [9.0, 351.0], [9.1, 351.0], [9.2, 351.0], [9.3, 351.0], [9.4, 351.0], [9.5, 351.0], [9.6, 353.0], [9.7, 353.0], [9.8, 353.0], [9.9, 353.0], [10.0, 353.0], [10.1, 353.0], [10.2, 353.0], [10.3, 353.0], [10.4, 353.0], [10.5, 353.0], [10.6, 353.0], [10.7, 353.0], [10.8, 353.0], [10.9, 353.0], [11.0, 353.0], [11.1, 353.0], [11.2, 354.0], [11.3, 354.0], [11.4, 354.0], [11.5, 354.0], [11.6, 354.0], [11.7, 354.0], [11.8, 354.0], [11.9, 354.0], [12.0, 354.0], [12.1, 354.0], [12.2, 354.0], [12.3, 354.0], [12.4, 354.0], [12.5, 354.0], [12.6, 354.0], [12.7, 354.0], [12.8, 354.0], [12.9, 354.0], [13.0, 354.0], [13.1, 354.0], [13.2, 355.0], [13.3, 355.0], [13.4, 355.0], [13.5, 355.0], [13.6, 355.0], [13.7, 355.0], [13.8, 355.0], [13.9, 355.0], [14.0, 355.0], [14.1, 355.0], [14.2, 355.0], [14.3, 355.0], [14.4, 355.0], [14.5, 355.0], [14.6, 355.0], [14.7, 355.0], [14.8, 355.0], [14.9, 355.0], [15.0, 355.0], [15.1, 355.0], [15.2, 356.0], [15.3, 356.0], [15.4, 356.0], [15.5, 356.0], [15.6, 356.0], [15.7, 356.0], [15.8, 356.0], [15.9, 356.0], [16.0, 356.0], [16.1, 356.0], [16.2, 356.0], [16.3, 356.0], [16.4, 356.0], [16.5, 356.0], [16.6, 356.0], [16.7, 356.0], [16.8, 357.0], [16.9, 357.0], [17.0, 357.0], [17.1, 357.0], [17.2, 357.0], [17.3, 357.0], [17.4, 357.0], [17.5, 357.0], [17.6, 357.0], [17.7, 357.0], [17.8, 357.0], [17.9, 357.0], [18.0, 358.0], [18.1, 358.0], [18.2, 358.0], [18.3, 358.0], [18.4, 358.0], [18.5, 358.0], [18.6, 358.0], [18.7, 358.0], [18.8, 358.0], [18.9, 358.0], [19.0, 358.0], [19.1, 358.0], [19.2, 358.0], [19.3, 358.0], [19.4, 358.0], [19.5, 358.0], [19.6, 358.0], [19.7, 358.0], [19.8, 358.0], [19.9, 358.0], [20.0, 358.0], [20.1, 358.0], [20.2, 358.0], [20.3, 358.0], [20.4, 358.0], [20.5, 358.0], [20.6, 358.0], [20.7, 358.0], [20.8, 358.0], [20.9, 358.0], [21.0, 358.0], [21.1, 358.0], [21.2, 358.0], [21.3, 358.0], [21.4, 358.0], [21.5, 358.0], [21.6, 359.0], [21.7, 359.0], [21.8, 359.0], [21.9, 359.0], [22.0, 359.0], [22.1, 359.0], [22.2, 359.0], [22.3, 359.0], [22.4, 359.0], [22.5, 359.0], [22.6, 359.0], [22.7, 359.0], [22.8, 359.0], [22.9, 359.0], [23.0, 359.0], [23.1, 359.0], [23.2, 359.0], [23.3, 359.0], [23.4, 359.0], [23.5, 359.0], [23.6, 360.0], [23.7, 360.0], [23.8, 360.0], [23.9, 360.0], [24.0, 360.0], [24.1, 360.0], [24.2, 360.0], [24.3, 360.0], [24.4, 360.0], [24.5, 360.0], [24.6, 360.0], [24.7, 360.0], [24.8, 361.0], [24.9, 361.0], [25.0, 361.0], [25.1, 361.0], [25.2, 361.0], [25.3, 361.0], [25.4, 361.0], [25.5, 361.0], [25.6, 361.0], [25.7, 361.0], [25.8, 361.0], [25.9, 361.0], [26.0, 361.0], [26.1, 361.0], [26.2, 361.0], [26.3, 361.0], [26.4, 361.0], [26.5, 361.0], [26.6, 361.0], [26.7, 361.0], [26.8, 362.0], [26.9, 362.0], [27.0, 362.0], [27.1, 362.0], [27.2, 362.0], [27.3, 362.0], [27.4, 362.0], [27.5, 362.0], [27.6, 362.0], [27.7, 362.0], [27.8, 362.0], [27.9, 362.0], [28.0, 362.0], [28.1, 362.0], [28.2, 362.0], [28.3, 362.0], [28.4, 362.0], [28.5, 362.0], [28.6, 362.0], [28.7, 362.0], [28.8, 362.0], [28.9, 362.0], [29.0, 362.0], [29.1, 362.0], [29.2, 363.0], [29.3, 363.0], [29.4, 363.0], [29.5, 363.0], [29.6, 363.0], [29.7, 363.0], [29.8, 363.0], [29.9, 363.0], [30.0, 363.0], [30.1, 363.0], [30.2, 363.0], [30.3, 363.0], [30.4, 363.0], [30.5, 363.0], [30.6, 363.0], [30.7, 363.0], [30.8, 363.0], [30.9, 363.0], [31.0, 363.0], [31.1, 363.0], [31.2, 363.0], [31.3, 363.0], [31.4, 363.0], [31.5, 363.0], [31.6, 363.0], [31.7, 363.0], [31.8, 363.0], [31.9, 363.0], [32.0, 364.0], [32.1, 364.0], [32.2, 364.0], [32.3, 364.0], [32.4, 364.0], [32.5, 364.0], [32.6, 364.0], [32.7, 364.0], [32.8, 364.0], [32.9, 364.0], [33.0, 364.0], [33.1, 364.0], [33.2, 364.0], [33.3, 364.0], [33.4, 364.0], [33.5, 364.0], [33.6, 364.0], [33.7, 364.0], [33.8, 364.0], [33.9, 364.0], [34.0, 364.0], [34.1, 364.0], [34.2, 364.0], [34.3, 364.0], [34.4, 364.0], [34.5, 364.0], [34.6, 364.0], [34.7, 364.0], [34.8, 364.0], [34.9, 364.0], [35.0, 364.0], [35.1, 364.0], [35.2, 364.0], [35.3, 364.0], [35.4, 364.0], [35.5, 364.0], [35.6, 364.0], [35.7, 364.0], [35.8, 364.0], [35.9, 364.0], [36.0, 365.0], [36.1, 365.0], [36.2, 365.0], [36.3, 365.0], [36.4, 365.0], [36.5, 365.0], [36.6, 365.0], [36.7, 365.0], [36.8, 365.0], [36.9, 365.0], [37.0, 365.0], [37.1, 365.0], [37.2, 366.0], [37.3, 366.0], [37.4, 366.0], [37.5, 366.0], [37.6, 366.0], [37.7, 366.0], [37.8, 366.0], [37.9, 366.0], [38.0, 366.0], [38.1, 366.0], [38.2, 366.0], [38.3, 366.0], [38.4, 366.0], [38.5, 366.0], [38.6, 366.0], [38.7, 366.0], [38.8, 366.0], [38.9, 367.0], [39.0, 367.0], [39.1, 367.0], [39.2, 367.0], [39.3, 367.0], [39.4, 367.0], [39.5, 367.0], [39.6, 367.0], [39.7, 367.0], [39.8, 367.0], [39.9, 367.0], [40.0, 367.0], [40.1, 367.0], [40.2, 367.0], [40.3, 367.0], [40.4, 367.0], [40.5, 367.0], [40.6, 367.0], [40.7, 367.0], [40.8, 367.0], [40.9, 367.0], [41.0, 367.0], [41.1, 367.0], [41.2, 367.0], [41.3, 367.0], [41.4, 367.0], [41.5, 367.0], [41.6, 367.0], [41.7, 367.0], [41.8, 367.0], [41.9, 367.0], [42.0, 367.0], [42.1, 367.0], [42.2, 367.0], [42.3, 367.0], [42.4, 367.0], [42.5, 367.0], [42.6, 367.0], [42.7, 367.0], [42.8, 367.0], [42.9, 368.0], [43.0, 368.0], [43.1, 368.0], [43.2, 368.0], [43.3, 368.0], [43.4, 368.0], [43.5, 368.0], [43.6, 368.0], [43.7, 368.0], [43.8, 368.0], [43.9, 368.0], [44.0, 368.0], [44.1, 368.0], [44.2, 368.0], [44.3, 368.0], [44.4, 368.0], [44.5, 368.0], [44.6, 368.0], [44.7, 368.0], [44.8, 368.0], [44.9, 368.0], [45.0, 368.0], [45.1, 368.0], [45.2, 369.0], [45.3, 369.0], [45.4, 369.0], [45.5, 369.0], [45.6, 369.0], [45.7, 369.0], [45.8, 369.0], [45.9, 369.0], [46.0, 369.0], [46.1, 369.0], [46.2, 369.0], [46.3, 369.0], [46.4, 369.0], [46.5, 369.0], [46.6, 369.0], [46.7, 369.0], [46.8, 369.0], [46.9, 369.0], [47.0, 369.0], [47.1, 369.0], [47.2, 369.0], [47.3, 369.0], [47.4, 369.0], [47.5, 369.0], [47.6, 370.0], [47.7, 370.0], [47.8, 370.0], [47.9, 370.0], [48.0, 370.0], [48.1, 370.0], [48.2, 370.0], [48.3, 370.0], [48.4, 370.0], [48.5, 370.0], [48.6, 370.0], [48.7, 370.0], [48.8, 370.0], [48.9, 371.0], [49.0, 371.0], [49.1, 371.0], [49.2, 371.0], [49.3, 371.0], [49.4, 371.0], [49.5, 371.0], [49.6, 371.0], [49.7, 371.0], [49.8, 371.0], [49.9, 371.0], [50.0, 371.0], [50.1, 371.0], [50.2, 371.0], [50.3, 371.0], [50.4, 371.0], [50.5, 371.0], [50.6, 371.0], [50.7, 371.0], [50.8, 371.0], [50.9, 371.0], [51.0, 371.0], [51.1, 371.0], [51.2, 372.0], [51.3, 372.0], [51.4, 372.0], [51.5, 372.0], [51.6, 372.0], [51.7, 372.0], [51.8, 372.0], [51.9, 372.0], [52.0, 373.0], [52.1, 373.0], [52.2, 373.0], [52.3, 373.0], [52.4, 373.0], [52.5, 373.0], [52.6, 373.0], [52.7, 373.0], [52.8, 373.0], [52.9, 373.0], [53.0, 373.0], [53.1, 373.0], [53.2, 373.0], [53.3, 373.0], [53.4, 373.0], [53.5, 373.0], [53.6, 374.0], [53.7, 374.0], [53.8, 374.0], [53.9, 374.0], [54.0, 374.0], [54.1, 374.0], [54.2, 374.0], [54.3, 374.0], [54.4, 374.0], [54.5, 374.0], [54.6, 374.0], [54.7, 374.0], [54.8, 374.0], [54.9, 374.0], [55.0, 374.0], [55.1, 374.0], [55.2, 374.0], [55.3, 374.0], [55.4, 374.0], [55.5, 374.0], [55.6, 374.0], [55.7, 374.0], [55.8, 374.0], [55.9, 374.0], [56.0, 374.0], [56.1, 374.0], [56.2, 374.0], [56.3, 374.0], [56.4, 375.0], [56.5, 375.0], [56.6, 375.0], [56.7, 375.0], [56.8, 375.0], [56.9, 375.0], [57.0, 375.0], [57.1, 375.0], [57.2, 376.0], [57.3, 376.0], [57.4, 376.0], [57.5, 376.0], [57.6, 376.0], [57.7, 376.0], [57.8, 376.0], [57.9, 376.0], [58.0, 377.0], [58.1, 377.0], [58.2, 377.0], [58.3, 377.0], [58.4, 377.0], [58.5, 377.0], [58.6, 377.0], [58.7, 377.0], [58.8, 377.0], [58.9, 377.0], [59.0, 377.0], [59.1, 377.0], [59.2, 377.0], [59.3, 377.0], [59.4, 377.0], [59.5, 377.0], [59.6, 377.0], [59.7, 377.0], [59.8, 377.0], [59.9, 377.0], [60.0, 377.0], [60.1, 377.0], [60.2, 377.0], [60.3, 377.0], [60.4, 378.0], [60.5, 378.0], [60.6, 378.0], [60.7, 378.0], [60.8, 378.0], [60.9, 378.0], [61.0, 378.0], [61.1, 378.0], [61.2, 378.0], [61.3, 378.0], [61.4, 378.0], [61.5, 378.0], [61.6, 378.0], [61.7, 378.0], [61.8, 378.0], [61.9, 378.0], [62.0, 378.0], [62.1, 378.0], [62.2, 378.0], [62.3, 378.0], [62.4, 379.0], [62.5, 379.0], [62.6, 379.0], [62.7, 379.0], [62.8, 379.0], [62.9, 379.0], [63.0, 379.0], [63.1, 379.0], [63.2, 379.0], [63.3, 379.0], [63.4, 379.0], [63.5, 379.0], [63.6, 379.0], [63.7, 379.0], [63.8, 379.0], [63.9, 379.0], [64.0, 380.0], [64.1, 380.0], [64.2, 380.0], [64.3, 380.0], [64.4, 380.0], [64.5, 380.0], [64.6, 380.0], [64.7, 380.0], [64.8, 380.0], [64.9, 380.0], [65.0, 380.0], [65.1, 380.0], [65.2, 380.0], [65.3, 380.0], [65.4, 380.0], [65.5, 380.0], [65.6, 380.0], [65.7, 380.0], [65.8, 380.0], [65.9, 380.0], [66.0, 381.0], [66.1, 381.0], [66.2, 381.0], [66.3, 381.0], [66.4, 381.0], [66.5, 381.0], [66.6, 381.0], [66.7, 381.0], [66.8, 382.0], [66.9, 382.0], [67.0, 382.0], [67.1, 382.0], [67.2, 382.0], [67.3, 382.0], [67.4, 382.0], [67.5, 382.0], [67.6, 382.0], [67.7, 382.0], [67.8, 382.0], [67.9, 382.0], [68.0, 383.0], [68.1, 383.0], [68.2, 383.0], [68.3, 383.0], [68.4, 383.0], [68.5, 383.0], [68.6, 383.0], [68.7, 383.0], [68.8, 383.0], [68.9, 383.0], [69.0, 383.0], [69.1, 383.0], [69.2, 384.0], [69.3, 384.0], [69.4, 384.0], [69.5, 384.0], [69.6, 384.0], [69.7, 384.0], [69.8, 384.0], [69.9, 384.0], [70.0, 384.0], [70.1, 384.0], [70.2, 384.0], [70.3, 384.0], [70.4, 385.0], [70.5, 385.0], [70.6, 385.0], [70.7, 385.0], [70.8, 385.0], [70.9, 385.0], [71.0, 385.0], [71.1, 385.0], [71.2, 385.0], [71.3, 385.0], [71.4, 385.0], [71.5, 385.0], [71.6, 385.0], [71.7, 385.0], [71.8, 385.0], [71.9, 385.0], [72.0, 386.0], [72.1, 386.0], [72.2, 386.0], [72.3, 386.0], [72.4, 386.0], [72.5, 386.0], [72.6, 386.0], [72.7, 386.0], [72.8, 387.0], [72.9, 387.0], [73.0, 387.0], [73.1, 387.0], [73.2, 388.0], [73.3, 388.0], [73.4, 388.0], [73.5, 388.0], [73.6, 388.0], [73.7, 388.0], [73.8, 388.0], [73.9, 388.0], [74.0, 389.0], [74.1, 389.0], [74.2, 389.0], [74.3, 389.0], [74.4, 389.0], [74.5, 389.0], [74.6, 389.0], [74.7, 389.0], [74.8, 389.0], [74.9, 389.0], [75.0, 389.0], [75.1, 389.0], [75.2, 390.0], [75.3, 390.0], [75.4, 390.0], [75.5, 390.0], [75.6, 390.0], [75.7, 390.0], [75.8, 390.0], [75.9, 390.0], [76.0, 390.0], [76.1, 390.0], [76.2, 390.0], [76.3, 390.0], [76.4, 391.0], [76.5, 391.0], [76.6, 391.0], [76.7, 391.0], [76.8, 391.0], [76.9, 392.0], [77.0, 392.0], [77.1, 392.0], [77.2, 392.0], [77.3, 393.0], [77.4, 393.0], [77.5, 393.0], [77.6, 393.0], [77.7, 394.0], [77.8, 394.0], [77.9, 394.0], [78.0, 394.0], [78.1, 395.0], [78.2, 395.0], [78.3, 395.0], [78.4, 395.0], [78.5, 399.0], [78.6, 399.0], [78.7, 399.0], [78.8, 399.0], [78.9, 400.0], [79.0, 400.0], [79.1, 400.0], [79.2, 400.0], [79.3, 402.0], [79.4, 402.0], [79.5, 402.0], [79.6, 402.0], [79.7, 402.0], [79.8, 402.0], [79.9, 402.0], [80.0, 402.0], [80.1, 403.0], [80.2, 403.0], [80.3, 403.0], [80.4, 403.0], [80.5, 408.0], [80.6, 408.0], [80.7, 408.0], [80.8, 408.0], [80.9, 408.0], [81.0, 408.0], [81.1, 408.0], [81.2, 408.0], [81.3, 410.0], [81.4, 410.0], [81.5, 410.0], [81.6, 410.0], [81.7, 412.0], [81.8, 412.0], [81.9, 412.0], [82.0, 412.0], [82.1, 412.0], [82.2, 412.0], [82.3, 412.0], [82.4, 412.0], [82.5, 414.0], [82.6, 414.0], [82.7, 414.0], [82.8, 414.0], [82.9, 416.0], [83.0, 416.0], [83.1, 416.0], [83.2, 416.0], [83.3, 418.0], [83.4, 418.0], [83.5, 418.0], [83.6, 418.0], [83.7, 426.0], [83.8, 426.0], [83.9, 426.0], [84.0, 426.0], [84.1, 429.0], [84.2, 429.0], [84.3, 429.0], [84.4, 429.0], [84.5, 434.0], [84.6, 434.0], [84.7, 434.0], [84.8, 434.0], [84.9, 455.0], [85.0, 455.0], [85.1, 455.0], [85.2, 455.0], [85.3, 456.0], [85.4, 456.0], [85.5, 456.0], [85.6, 456.0], [85.7, 456.0], [85.8, 456.0], [85.9, 456.0], [86.0, 456.0], [86.1, 458.0], [86.2, 458.0], [86.3, 458.0], [86.4, 458.0], [86.5, 459.0], [86.6, 459.0], [86.7, 459.0], [86.8, 459.0], [86.9, 462.0], [87.0, 462.0], [87.1, 462.0], [87.2, 462.0], [87.3, 468.0], [87.4, 468.0], [87.5, 468.0], [87.6, 468.0], [87.7, 492.0], [87.8, 492.0], [87.9, 492.0], [88.0, 492.0], [88.1, 496.0], [88.2, 496.0], [88.3, 496.0], [88.4, 496.0], [88.5, 501.0], [88.6, 501.0], [88.7, 501.0], [88.8, 501.0], [88.9, 507.0], [89.0, 507.0], [89.1, 507.0], [89.2, 507.0], [89.3, 512.0], [89.4, 512.0], [89.5, 512.0], [89.6, 512.0], [89.7, 559.0], [89.8, 559.0], [89.9, 559.0], [90.0, 559.0], [90.1, 569.0], [90.2, 569.0], [90.3, 569.0], [90.4, 569.0], [90.5, 573.0], [90.6, 573.0], [90.7, 573.0], [90.8, 573.0], [90.9, 593.0], [91.0, 593.0], [91.1, 593.0], [91.2, 593.0], [91.3, 623.0], [91.4, 623.0], [91.5, 623.0], [91.6, 623.0], [91.7, 645.0], [91.8, 645.0], [91.9, 645.0], [92.0, 645.0], [92.1, 668.0], [92.2, 668.0], [92.3, 668.0], [92.4, 668.0], [92.5, 696.0], [92.6, 696.0], [92.7, 696.0], [92.8, 696.0], [92.9, 718.0], [93.0, 718.0], [93.1, 718.0], [93.2, 718.0], [93.3, 721.0], [93.4, 721.0], [93.5, 721.0], [93.6, 721.0], [93.7, 723.0], [93.8, 723.0], [93.9, 723.0], [94.0, 723.0], [94.1, 727.0], [94.2, 727.0], [94.3, 727.0], [94.4, 727.0], [94.5, 739.0], [94.6, 739.0], [94.7, 739.0], [94.8, 739.0], [94.9, 784.0], [95.0, 784.0], [95.1, 784.0], [95.2, 784.0], [95.3, 897.0], [95.4, 897.0], [95.5, 897.0], [95.6, 897.0], [95.7, 933.0], [95.8, 933.0], [95.9, 933.0], [96.0, 933.0], [96.1, 939.0], [96.2, 939.0], [96.3, 939.0], [96.4, 939.0], [96.5, 948.0], [96.6, 948.0], [96.7, 948.0], [96.8, 948.0], [96.9, 1106.0], [97.0, 1106.0], [97.1, 1106.0], [97.2, 1106.0], [97.3, 1264.0], [97.4, 1264.0], [97.5, 1264.0], [97.6, 1264.0], [97.7, 1539.0], [97.8, 1539.0], [97.9, 1539.0], [98.0, 1539.0], [98.1, 1762.0], [98.2, 1762.0], [98.3, 1762.0], [98.4, 1762.0], [98.5, 1899.0], [98.6, 1899.0], [98.7, 1899.0], [98.8, 1899.0], [98.9, 2123.0], [99.0, 2123.0], [99.1, 2123.0], [99.2, 2123.0], [99.3, 2147.0], [99.4, 2147.0], [99.5, 2147.0], [99.6, 2147.0], [99.7, 2203.0], [99.8, 2203.0], [99.9, 2203.0], [100.0, 2203.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 197.0, "series": [{"data": [[2100.0, 2.0], [2200.0, 1.0], [600.0, 4.0], [700.0, 6.0], [800.0, 1.0], [900.0, 3.0], [1100.0, 1.0], [1200.0, 1.0], [300.0, 197.0], [1500.0, 1.0], [400.0, 24.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 7.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 221.0, "series": [{"data": [[0.0, 221.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 23.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.36000000000001, "minX": 1.79159592E12, "maxY": 18.36000000000001, "series": [{"data": [[1.79159592E12, 18.36000000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79159592E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 340.0, "minX": 1.0, "maxY": 1263.1538461538462, "series": [{"data": [[2.0, 341.0], [3.0, 345.8571428571429], [4.0, 349.75], [5.0, 344.0], [6.0, 352.5], [7.0, 358.6], [8.0, 366.0], [9.0, 499.14285714285717], [10.0, 524.0], [11.0, 633.1], [12.0, 355.5], [13.0, 1263.1538461538462], [14.0, 570.6666666666666], [15.0, 436.6], [16.0, 366.5], [1.0, 340.0], [17.0, 404.5454545454545], [18.0, 396.83333333333337], [19.0, 377.42857142857144], [20.0, 374.4], [21.0, 424.75], [22.0, 384.1578947368422], [23.0, 370.6], [24.0, 365.75], [25.0, 369.7656250000001]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[18.36000000000001, 445.4079999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 965.8333333333334, "minX": 1.79159592E12, "maxY": 3709.6, "series": [{"data": [[1.79159592E12, 3709.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79159592E12, 965.8333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79159592E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 445.4079999999998, "minX": 1.79159592E12, "maxY": 445.4079999999998, "series": [{"data": [[1.79159592E12, 445.4079999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79159592E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 445.3199999999997, "minX": 1.79159592E12, "maxY": 445.3199999999997, "series": [{"data": [[1.79159592E12, 445.3199999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79159592E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 97.05999999999999, "minX": 1.79159592E12, "maxY": 97.05999999999999, "series": [{"data": [[1.79159592E12, 97.05999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79159592E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 340.0, "minX": 1.79159592E12, "maxY": 1264.0, "series": [{"data": [[1.79159592E12, 1264.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79159592E12, 340.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79159592E12, 494.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79159592E12, 1034.900000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79159592E12, 370.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79159592E12, 712.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79159592E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 345.0, "minX": 9.0, "maxY": 2011.0, "series": [{"data": [[65.0, 365.0], [18.0, 493.5], [9.0, 345.0], [45.0, 378.0], [24.0, 355.0], [29.0, 394.0], [60.0, 372.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[29.0, 2011.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 345.0, "minX": 9.0, "maxY": 2011.0, "series": [{"data": [[65.0, 365.0], [18.0, 493.5], [9.0, 345.0], [45.0, 378.0], [24.0, 355.0], [29.0, 394.0], [60.0, 372.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[29.0, 2011.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.79159592E12, "maxY": 4.166666666666667, "series": [{"data": [[1.79159592E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79159592E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.79159592E12, "maxY": 4.166666666666667, "series": [{"data": [[1.79159592E12, 4.166666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79159592E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.79159592E12, "maxY": 4.066666666666666, "series": [{"data": [[1.79159592E12, 4.066666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.79159592E12, 0.1]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79159592E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.79159592E12, "maxY": 4.066666666666666, "series": [{"data": [[1.79159592E12, 4.066666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.79159592E12, 0.1]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79159592E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

