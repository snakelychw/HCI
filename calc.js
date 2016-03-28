
           var Accumulate = 0;
           var FlagNewNum = false;
           var PendingOp = "";
           function NumPressed (Num) {
               if (FlagNewNum) {
                   document.getElementById('input').value  = Num;
                   FlagNewNum = false;
               }
               else {
                   if (document.getElementById('input').value == "0")
                       document.getElementById('input').value = Num;
                   else
                       document.getElementById('input').value += Num;
               }
           }
           function Operation (Op) {
               var Readout = document.getElementById('input').value;
               if (FlagNewNum && PendingOp != "=");
               else
               {
                   FlagNewNum = true;
                   if ( '+' == PendingOp )
                       Accumulate += parseFloat(Readout);
                   else if ( '-' == PendingOp )
                       Accumulate -= parseFloat(Readout);
                   else if ( '/' == PendingOp )
                       Accumulate /= parseFloat(Readout);
                   else if ( '*' == PendingOp )
                       Accumulate *= parseFloat(Readout);
                   else
                       Accumulate = parseFloat(Readout);
                   document.getElementById('input').value = Accumulate;
                   PendingOp = Op;
               }
           }
           function Decimal () {
               var curReadOut = document.getElementById('input').value;
               if (FlagNewNum) {
                   curReadOut = "0.";
                   FlagNewNum = false;
               }
               else
               {
                   if (curReadOut.indexOf(".") == -1)
                       curReadOut += ".";
               }
               document.getElementById('input').value = curReadOut;
           }

           function Clear () {
               Accumulate = 0;
               PendingOp = "";
               document.getElementById('input').value = "0";
               FlagNewNum = true;
           }
           function Neg () {
               document.getElementById('input').value = parseFloat(document.getElementById('input').value) * -1;
           }
           function Percent () {
               document.getElementById('input').value = (parseFloat(document.getElementById('input').value) / 100) * parseFloat(Accumulate);
           }
