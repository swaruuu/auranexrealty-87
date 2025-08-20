import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show popup after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto">
      <Card className="shadow-premium border-primary/20 animate-in slide-in-from-bottom-4">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={acceptCookies}
                  variant="premium" 
                  size="sm" 
                  className="flex-1"
                >
                  Accept All
                </Button>
                <Button 
                  onClick={rejectCookies}
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                >
                  Reject
                </Button>
              </div>
            </div>
            <button
              onClick={rejectCookies}
              className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Close cookie popup"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookiePopup;