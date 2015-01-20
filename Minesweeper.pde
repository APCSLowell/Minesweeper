/**
 *    Simple buttons
 *
 *    .. works with JavaScript mode since Processing 2.0a5
 */

import de.bezier.guido.*;

SimpleButton button;

void setup ()
{
    size(400, 400);
    
    // make the manager
    
    Interactive.make( this );
    
    // create some buttons
    
    int w = (width-20)/20;
    for ( int ix = 20, k = width-w; ix <= k; ix += 2*w )
    {
        for ( int iy = 20, n = height-w; iy <= n; iy += 2*w )
        {
            new SimpleButton( ix, iy, w, w );
        }
    }
}

void draw ()
{
    background( 0 );
}
public class SimpleButton
{
    private float x, y, width, height;
    private boolean on;
    
    public SimpleButton ( float xx, float yy, float w, float h )
    {
        x = xx; y = yy; width = w; height = h;
        
        Interactive.add( this ); // register it with the manager
    }
    
    // called by manager
    
    public void mousePressed () 
    {
        on = !on;
    }

    public void draw () 
    {
        if ( on ) fill( 200 );
        else fill( 100 );
        
        rect(x, y, width, height);
    }
}



