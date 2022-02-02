let correctCount = 0;
            
            function question1()
            {
                let answer1 = document.getElementsByName('r1');
                if (answer1[1].checked)
                    {
                        correctCount++;
                    }
            }
            
            function question2()
            {
                let answer2 = document.getElementsByName('r2');
                if (answer2[0].checked)
                    {
                        correctCount++;
                    }
            }

            function question3()
            {
                var answer3 = document.getElementsByName('r3');
                if (answer3[0].checked)
                    {
                        correctCount++;
                    }
            }

            function question4()
            {
                var answer41 = document.getElementById('hs');
                var answer42 = document.getElementById('wz');
                if (answer41.checked)
                    {
                        correctCount++;
                    }
                if (answer42.checked)
                    {
                        correctCount++;
                    }
            }

            function question5()
            {
                var answer5 = document.getElementsByName('r4');
                if (answer5[3].checked)
                    {
                        correctCount++;
                    }
            }

            function question6()
            {
                var answer6 = document.getElementsByName('r5');
                if (answer6[0].checked)
                    {
                        correctCount++;
                    }
            }

            function question7()
            {
                var answer7 = document.getElementsByName('r6');
                if (answer7[2].checked)
                    {
                        correctCount++;
                    }
            }

            function question8()
            {
                var answer8 = document.getElementsByName('r7');
                if (answer8[2].checked)
                    {
                        correctCount++;
                    }
            }

            function question9()
            {
                var answer9 = document.getElementsByName('r8');
                if (answer9[1].checked)
                    {
                        correctCount++;
                    }
            }
            
            function question10()
            {
                var answer101 = document.getElementById('csgo');
                var answer102 = document.getElementById('valorant');
                if (answer101.checked)
                    {
                        correctCount++;
                    }
                if (answer102.checked)
                    {
                        correctCount++;
                    }
            }
            
            function calculateAll()
            {
                question1();
                question2();
                question3();
                question4();
                question5();
                question6();
                question7();
                question8();
                question9();
                question10();
                alert(correctCount);
            }