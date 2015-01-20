if(!Interactive) {
  var Interactive = function() {
    var f, j, k, l, m, n = function(a) {
      document.defaultView && document.defaultView.getComputedStyle && (a = document.defaultView.getComputedStyle(a, null), j = parseInt(a.paddingLeft, 10) || 0, k = parseInt(a.paddingTop, 10) || 0, l = parseInt(a.borderLeftWidth, 10) || 0, m = parseInt(a.borderTopWidth, 10) || 0)
    }, p = function(a, b, c) {
      if("addEventListener" in a) {
        a.addEventListener(b, c)
      }else {
        var i = a["on" + b];
        a["on" + b] = function(b) {
          var o = c.apply(b.target, [b]);
          i && i.apply(a, [b]);
          return o
        }
      }
    }, d = function(a) {
      this.target = a.target;
      n(this.target);
      this.listeners = [];
      a.papplet && "draw" in a.papplet && (a.papplet.draw = function(b, a, c) {
        return function() {
          b.preDraw(a);
          c();
          b.postDraw(a)
        }
      }(this, a.papplet, a.papplet.draw));
      var a = "mousemove,mousedown,mouseup,click,dblclick,mouseover,mouseout,mouseenter,mouseleave,mousewheel,DOMMouseScroll".split(","), b = {mousemove:"mouseMoved", mousedown:"mousePressed", dblclick:"mouseDoubleClicked", mouseup:"mouseReleased", mousewheel:"mouseScrolled", DOMMouseScroll:"mouseScrolled"}, c;
      for(c in a) {
        (function(b, a, c, d) {
          p(a, c, function(c) {
            var e, g;
            e = a;
            var h = 0;
            g = 0;
            if(e.offsetParent) {
              do {
                h = h + e.offsetLeft;
                g = g + e.offsetTop
              }while(e = e.offsetParent)
            }
            e = a;
            do {
              h = h - (e.scrollLeft || 0);
              g = g - (e.scrollTop || 0)
            }while(e = e.parentNode);
            h = h + j;
            g = g + k;
            h = h + l;
            g = g + m;
            h = h + window.pageXOffset;
            g = g + window.pageYOffset;
            e = h;
            for(var f in b.listeners) {
              if(b.listeners[f].isActive() && d in b.listeners[f]) {
                if(d == "mouseScrolled") {
                  b.listeners[f][d](c.detail ? c.detail * -1 : c.wheelDelta / 40, c.pageX - e, c.pageY - g)
                }else {
                  b.listeners[f][d](c.pageX - e, c.pageY - g)
                }
              }
            }
          })
        })(this, this.target, a[c], b[a[c]])
      }
      this.add = function(b) {
        this.listeners.push(b)
      };
      this.preDraw = function() {
      };
      this.postDraw = function() {
        if(this.listeners) {
          for(var b in this.listeners) {
            "draw" in this.listeners[b] && this.listeners[b].draw()
          }
        }
      }
    };
    d.make = function(a) {
      f = new d({target:a.externals.canvas, papplet:a})
    };
    d.add = function(a) {
      f.add(new q(a))
    };
    d.setActive = function(a, b) {
      if(f) {
        for(var c in f.listeners) {
          var i = f.listeners[c];
          i.listener == a && i.setActive(b)
        }
      }
    };
    d.insideRect = function(a, b, c, i, d, f) {
      return d >= a && d <= a + c && f >= b && f <= b + i
    };
    var q = function(a) {
      this.listener = a;
      "isInside" in this.listener || ("x" in this.listener && "y" in this.listener && "width" in this.listener && "height" in this.listener ? this.listener.isInside = function(b, c) {
        return d.insideRect(this.x, this.y, this.width, this.height, b, c)
      } : alert("Interactive: listener must implement\npublic boolean isInside (float mx, float my)"));
      this.pressed = this.dragged = this.hover = !1;
      this.activated = !0;
      this.clickedMouseX;
      this.clickedMouseY;
      this.clickedPositionX;
      this.clickedPositionY;
      this.draggedDistX;
      this.draggedDistY;
      this.lastPressed = 0;
      this.activated = !0;
      this.mousePressed = function(b, c) {
        if(this.activated) {
          if(this.pressed = this.listener.isInside(b, c)) {
            this.clickedPositionX = this.listener.x;
            this.clickedPositionY = this.listener.y;
            this.clickedMouseX = b;
            this.clickedMouseY = c;
            "mousePressed" in this.listener && this.listener.mousePressed(b, c)
          }
        }
      };
      this.mouseDoubleClicked = function(b, c) {
        this.activated && this.listener.isInside(b, c) && "mouseDoubleClicked" in this.listener && this.listener.mouseDoubleClicked(b, c)
      };
      this.mouseMoved = function(b, c) {
        if(this.activated) {
          if(this.dragged = this.pressed) {
            this.draggedDistX = this.clickedMouseX - b;
            this.draggedDistY = this.clickedMouseY - c;
            "mouseDragged" in this.listener && this.listener.mouseDragged(b, c, this.clickedPositionX - this.draggedDistX, this.clickedPositionY - this.draggedDistY)
          }else {
            var a = this.listener.isInside(b, c);
            !a && this.hover ? "mouseExited" in this.listener && this.listener.mouseExited(b, c) : a && !this.hover ? "mouseEntered" in this.listener && this.listener.mouseEntered(b, c) : a && "mouseMoved" in this.listener && this.listener.mouseMoved(b, c);
            this.hover = a
          }
        }
      };
      this.mouseReleased = function(b, a) {
        if(this.activated) {
          if(this.dragged) {
            this.draggedDistX = this.clickedMouseX - b;
            this.draggedDistY = this.clickedMouseY - a
          }
          this.pressed && "mouseReleased" in this.listener && this.listener.mouseReleased(b, a);
          this.pressed = this.dragged = false
        }
      };
      this.mouseScrolled = function(b, a, d) {
        this.activated && this.listener.isInside(a, d) && "mouseScrolled" in this.listener && this.listener.mouseScrolled(b)
      };
      this.setActive = function(a) {
        this.activated = a;
        this.listener && "setActive" in this.listener && this.listener.setActive(a)
      };
      this.isActive = function() {
        return this.listener && "isActive" in this.listener ? this.listener.isActive() : this.activated
      };
      this.draw = function() {
        if(this.activated && this.listener && "draw" in this.listener) {
          return this.listener.draw()
        }
      }
    };
    return d
  }()
}
;