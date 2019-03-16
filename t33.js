var x=0;
var a = [100,101,102,103,104,105,106,107,108];
var w = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function show()
{
    for(i=0;i<9;i=i+3)
    {
        console.log("\n");
        console.log("["+a[i]+"] ["+a[i+1]+"] ["+a[i+2]+"]");
    }
}
function stg()
{
    var ary = [70,71,72,73];//present CPU inputs.
    var ps=0;
    var sol = [70,71,72,73,74,75];//total blank possible solutions
    for(i=0;i<9;i++)
    {
        if(a[i]==0)
        {
            ary[ps]=i;
            ps++;
        }
    }
    for(i=0;i<ary.length;i++)
    {
        var flag=0;
        var index=0;
        for(j=0;j<7;j++)
        {
            if(w[j][0]==ary[i] || w[j][1]==ary[i] || w[j][0]==ary[i])
            {
                var flaga = [0,0,0];
                if(w[j][0]==ary[i])
                {
                    flaga[1]=1;
                    flaga[2]=1;
                }
                if(w[j][1]==ary[i])
                {
                    flaga[0]=1;
                    flaga[2]=1;
                }
                if(w[j][2]==ary[i])
                {
                    flaga[1]=1;
                    flaga[0]=1;
                }
                if(flaga[0]==1 && flaga[1]==1)
                {
                    if(a[w[j][0]] >= 100 && a[w[j][1]]>=100)
                    {
                        sol[index++] = w[j][0];
                        sol[index++] = w[j][1];
                    }
                }
                if(flaga[1]==1 && flaga[2]==1)
                {
                    if(a[w[j][1]] >= 100 && a[w[j][2]]>=100)
                    {
                        sol[index++] = w[j][1];
                        sol[index++] = w[j][2];
                    }
                }
                if(flaga[0]==1 && flaga[2]==1)
                {
                    if(a[w[j][0]] >= 100 && a[w[j][2]]>=100)
                    {
                        sol[index++] = w[j][0];
                        sol[index++] = w[j][2];
                    }
                }
            }

        }
    }
    var mf=1;
    var m=0;
    var item=sol[0];   
    for(i=0;i<sol.length;i++)
    {
        for(j=i;j<sol.length;j++)
        {
            if(sol[i]==sol[j])
                m++;
            if(mf<m)
            {
                mf=m;
                item=sol[i];
            }

        }
        m=0;
    }
    for(i=0;i<sol.length;i++)
    {
        if(sol[i]%2==0)
        {
            if(sol[i]<70)
            {
                item=sol[i];
                break;
            }
        }
    }
    if(sol[0]==70)
    return 0;
    return item;
}
function player()
{
    var in1=prompt("enter pl1: ","");
    if(a[parseInt(in1)-1]!=0 && a[parseInt(in1)-1]!=1)
    {
        a[parseInt(in1)-1]=1;
    }
   // show();
}
function check()
{
    if((a[0]==1 && a[1]==1 && a[2]==1) || (a[3]==1 && a[4]==1 && a[5]==1) || (a[6]==1 && a[7]==1 && a[8]==1) || (a[0]==1 && a[3]==1 && a[6]==1) || (a[1]==1 && a[4]==1 && a[7]==1) || (a[2]==1 && a[5]==1 && a[8]==1 || (a[0]==1 && a[4]==1 && a[8]==1) || (a[2]==1 && a[4]==1 && a[6]==1)) )
        {
            return 1;
        }
        else if((a[0]==0 && a[1]==0 && a[2]==0) || (a[3]==0 && a[4]==0 && a[5]==0) || (a[6]==0 && a[7]==0 && a[8]==0) || (a[0]==0 && a[3]==0 && a[6]==0) || (a[1]==0 && a[4]==0 && a[7]==0) || (a[2]==0 && a[5]==0 && a[8]==0 || (a[0]==0 && a[4]==0 && a[8]==0) || (a[2]==0 && a[4]==0 && a[6]==0)) )
        {
            return 1;
        }
}
function random_move()
{
    var c;
    if(x==1)
    {
        if(a[8]==1 || a[6]==1)
        {
            return 7;
        }
        if(a[0]==1 || a[2]==1)
        {
            return 1;
        }
        
       /* if(a[4]!=1 && a[4]!=0)
        {
             return 4;
        }*/
        if(a[1]==1 || a[3]==1 || a[5]==1 ||a[7]==1)
        {
            return 4;
        }
        if(a[4]==1)
        {
            return 0;
        }
    }
    
    else
    {
       /* for(i=0;i<9;i++)
        {
            if(a[i]>=100 && a[i]<=108)
            {
                return i;
            }
        }*/
        var anss=stg();
        return anss;
    }
}
function make_win()
{
    for(i=0;i<9;i++)
    {
        c=50;
        c=move(0);
        if(c!=50)
        {
            return i;
        }
    }
    return c;
}
function move(pl)
{
    for(i=0;i<9;i++)
    {
        if(a[i]!=0 && a[i]!=1)
        {
            var temp=a[i];
            a[i]=pl;
            var c=check();
            a[i]=temp;
            if(c==1)
            return i;
        }
    }
    return 50;
}

function cpu()
{
    var pos=50;
    if(x>=3)
    {
        if(x>=4)
        {
            pos=move(0);
            console.log(pos);
        }
        if(pos==50)
        pos=move(1);
        if(pos==50)
        pos=random_move();   
    }
    else
    pos=random_move();

    a[parseInt(pos)]=0;
    show();
}
var plag=0;
while(x<9)
{
    player();
    if(check()==1)
    {
        console.log("player wins:");
        plag=1;
        break;
    }
    x++;
    cpu();
    if(check()==1)
    {
        console.log("CPU wins:");
        plag=1;
        break;
    }
    x++;
}
if(plag==0)
console.log("game draw!!! BETTER LUCK NEXT TIME.");