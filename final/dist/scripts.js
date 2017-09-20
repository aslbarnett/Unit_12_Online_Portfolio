var welcomeSection=document.getElementById("main-site-welcome"),developmentSection=document.getElementById("main-site-development"),martialArtsSection=document.getElementById("main-site-martial-arts"),developmentButton=document.getElementById("development-button"),martialArtsButton=document.getElementById("martial-arts-button");developmentButton.addEventListener("click",function(){"none"!==welcomeSection.style.display&&(welcomeSection.style.display="none"),"none"!==martialArtsSection.style.display&&(martialArtsSection.style.display="none"),developmentSection.style.display="flex"}),martialArtsButton.addEventListener("click",function(){"none"!==welcomeSection.style.display&&(welcomeSection.style.display="none"),"none"!==developmentSection.style.display&&(developmentSection.style.display="none"),martialArtsSection.style.display="flex"});
var contactButton=document.getElementById("main-site-contact"),mainSiteOverlay=document.getElementById("main-site-overlay"),mainSiteCloseButton=document.getElementById("main-site-close-button");contactButton.addEventListener("click",function(){mainSiteOverlay.style.display="block"}),mainSiteCloseButton.addEventListener("click",function(){mainSiteOverlay.style.display="none"});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtb2RhbC5qcyJdLCJuYW1lcyI6WyJ3ZWxjb21lU2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkZXZlbG9wbWVudFNlY3Rpb24iLCJtYXJ0aWFsQXJ0c1NlY3Rpb24iLCJkZXZlbG9wbWVudEJ1dHRvbiIsIm1hcnRpYWxBcnRzQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImNvbnRhY3RCdXR0b24iLCJtYWluU2l0ZU92ZXJsYXkiLCJtYWluU2l0ZUNsb3NlQnV0dG9uIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxlQUFpQkMsU0FBU0MsZUFBZSxxQkFDekNDLG1CQUFxQkYsU0FBU0MsZUFBZSx5QkFDN0NFLG1CQUFxQkgsU0FBU0MsZUFBZSwwQkFFN0NHLGtCQUFvQkosU0FBU0MsZUFBZSxzQkFDNUNJLGtCQUFvQkwsU0FBU0MsZUFBZSx1QkFJaERHLGtCQUFrQkUsaUJBQWlCLFFBQVMsV0FDSCxTQUFqQ1AsZUFBZVEsTUFBTUMsVUFDckJULGVBQWVRLE1BQU1DLFFBQVUsUUFFTSxTQUFyQ0wsbUJBQW1CSSxNQUFNQyxVQUN6QkwsbUJBQW1CSSxNQUFNQyxRQUFVLFFBRXZDTixtQkFBbUJLLE1BQU1DLFFBQVUsU0FHdkNILGtCQUFrQkMsaUJBQWlCLFFBQVMsV0FDSCxTQUFqQ1AsZUFBZVEsTUFBTUMsVUFDckJULGVBQWVRLE1BQU1DLFFBQVUsUUFFTSxTQUFyQ04sbUJBQW1CSyxNQUFNQyxVQUN6Qk4sbUJBQW1CSyxNQUFNQyxRQUFVLFFBRXZDTCxtQkFBbUJJLE1BQU1DLFFBQVU7QUMxQnZDLElBQUlDLGNBQWdCVCxTQUFTQyxlQUFlLHFCQUN4Q1MsZ0JBQWtCVixTQUFTQyxlQUFlLHFCQUMxQ1Usb0JBQXNCWCxTQUFTQyxlQUFlLDBCQUVsRFEsY0FBY0gsaUJBQWlCLFFBQVMsV0FDcENJLGdCQUFnQkgsTUFBTUMsUUFBVSxVQUdwQ0csb0JBQW9CTCxpQkFBaUIsUUFBUyxXQUMxQ0ksZ0JBQWdCSCxNQUFNQyxRQUFVIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd2VsY29tZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1zaXRlLXdlbGNvbWUnKTtcbnZhciBkZXZlbG9wbWVudFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1zaXRlLWRldmVsb3BtZW50Jyk7XG52YXIgbWFydGlhbEFydHNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2l0ZS1tYXJ0aWFsLWFydHMnKTtcblxudmFyIGRldmVsb3BtZW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldmVsb3BtZW50LWJ1dHRvbicpO1xudmFyIG1hcnRpYWxBcnRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcnRpYWwtYXJ0cy1idXR0b24nKTtcblxuXG5cbmRldmVsb3BtZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdlbGNvbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICB3ZWxjb21lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBpZiAobWFydGlhbEFydHNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICBtYXJ0aWFsQXJ0c1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgZGV2ZWxvcG1lbnRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59KTtcblxubWFydGlhbEFydHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAod2VsY29tZVNlY3Rpb24uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIHdlbGNvbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIGlmIChkZXZlbG9wbWVudFNlY3Rpb24uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGRldmVsb3BtZW50U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBtYXJ0aWFsQXJ0c1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pOyIsInZhciBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2l0ZS1jb250YWN0Jyk7XG52YXIgbWFpblNpdGVPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2l0ZS1vdmVybGF5Jyk7XG52YXIgbWFpblNpdGVDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXNpdGUtY2xvc2UtYnV0dG9uJyk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBtYWluU2l0ZU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxubWFpblNpdGVDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIG1haW5TaXRlT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7Il19