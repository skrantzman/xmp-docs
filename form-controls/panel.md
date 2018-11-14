# <Panel>

<a name="top"></a>

[Syntax](#syntax) [Remarks](#remarks) [Example](#example)

The Panel tag is a container tag that holds other tags and HTML. It can be used just as a container, making it easy to set the container's colors and borders. Primarily, though, it is used to show/hide parts of the form based on what role the current user is in. So, for instance, you can include controls that will only be available to administrators or editors or registered users, etc.

<a name="syntax"></a>

## Syntax

    <Panel  

 <a name="remarks"></a>

## Remarks

This tag can be used solely as a container (much like the DIV tag in HTML). More often, it will be used to only show portions of a form to members of particular roles. To do this, use the ShowRoles attribute.

*   **AccessKey**: Gets or sets the access key that allows you to quickly navigate to the control.  

*   **BackColor**: Color of the background of the control.  

*   **BackImageUrl**: Sets the URL of the background image for the panel control.  

*   **BorderColor**: Color of the border around the control.  

*   **BorderStyle**: Style of the border around the control.  

*   **BorderWidth**: Width of the border around the control.  

*   **CssClass**: Name of the Cascading Style Sheets (CSS) class used to style this control.  

*   **DefaultButton**: Set this to the ID of a push-button <AddButton>, <UpdateButton> or <CancelButton> on your form and it will be "clicked" when the user presses the ENTER key.Link and Image buttons may work for this as well, but are not supported. Link buttons, for instance, work on IE but not in Firefox.  

*   **Font Properties**: A series of attributes such as font-bold, font-size, etc. that allow you to control how the text in the control is displayed. [More  

    ](fontproperties.html)
*   **ForeColor**: Sets the foreground color (typically the color of the text) of the control.  

*   **Height**: Height of the control, specified in [units](units.html).  

*   **HorizontalAlign**: Sets the horizontal alignment of controls within the panel.  

*   **ID**: Name, consisting of letters and numbers, beginning with a letter, that uniquely identifies the control within the form.  

*   **ScrollBars**: Sets the visibility and position of scroll bars for the control:
    *   **None**: No scroll bars are shown (default)
    *   **Horizontal**: Only a horizontal scroll bar is shown
    *   **Vertical**: Only a vertical scroll bar is shown
    *   **Both**: Both horizontal and vertical scroll bars are shown
    *   **Auto**: Horizontal and/or vertical scroll bars are show - only if necessary  

*   **ShowIf**: (New to version 4.7) An expression that, when it evaluates to True, shows the content inside the panel tag. This operates as a simple boolean check. If A = B or if A <> B or if A > B etc.  
    This property works in conjunction with the _ShowRoles_ property. If ShowRoles is not specified, then _ShowIf_ will determine if the content is shown. If ShowRoles is specified, then it must evaluate to True and _ShowIf_ must be True for the content to be shown. If _ShowRoles_ evaluates to False, then _EvaluateIf_ is ignored. The content will not be shown.
    *   Example 1: ShowIf="1=1". In this example we are taking the value of the number "1" and comparing it to "1". If they are equal, this evaluates to TRUE and the contents of panel tag are shown.

        Example 2: ShowIf="1=5". In this example we are taking the value of the number "1" and comparing it to "5". Since they are not equal, it evaluates to FALSE and no contents are shown.

    *   Example 3: ShowIf='[[Join("{0}=Kelly",[[Url:name]])]]'. In this example, the passed-in name parameter is 'Kelly'.  

*   **ShowRoles**: A comma-delimited list of security role names. When specified, only members of the security roles will be shown the content of the panel. Note that if you are logged-in as host, you will see the panel contents even though the account may not be a member of one of the specified roles. To accurately test the functionality, you should login as a Non-host/superuser account.  

*   **Style**:Same as the HTML style attribute.It allows you to apply CSS styling to the control (e.g. "color: red; border: solid 1px black;").  

*   **Visible**: Determines if the control is visible (true) or hidden (false).  

*   **Width**: Width of the control in [units](units.html).  

*   **Wrap**: If true (default), content within the panel wraps. If false, content does not wrap.  

[Back to top](#top)<a name="example"></a>

## Example:

<div>`<AddForm>`  
`<span style="font-size: 10pt;" xmlns="http://www.w3.org/1999/xhtml">  ...</span>  
<span style="font-size: 10pt;" xmlns="http://www.w3.org/1999/xhtml"> </span><span style="color: #ff0000;"><span style="font-size: 10pt;" xmlns="http://www.w3.org/1999/xhtml"><Panel ShowRoles="Editor"></span></span>  
<span style="color: #ff0000;"><span style="font-size: 10pt;" xmlns="http://www.w3.org/1999/xhtml"></span></span><span style="font-size: 10pt;" xmlns="http://www.w3.org/1999/xhtml"><CheckBox Id="chkApproved" DataField="Approved" DataType="boolean" Text="Approved?" /></span>  
<span style="color: #ff0000;"><span style="font-size: 10pt;" xmlns="http://www.w3.org/1999/xhtml">  </Panel></span></span>`  
`  <table>`  
`    <tr>`  
`      <td>`  
`        <label For="txtFirstName" Text="First Name" />`  
`        <textbox Id="txtFirstName" DataField="FirstName" DataType="string" />`  
`      </td>`  
`    </tr>`  
`    <tr>`  
`      <td>`  
`        <label For="txtLastName" Text="Last Name" />`  
`        <textbox Id="txtLastName" DataField="LastName" DataType="string" />`  
`       </td>`  
`    </tr>`  
`    <tr>`  
`      <td colspan="2">`  
`        <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>`  
`      </td>`  
`    </tr>`  
`  </table>`  
`</AddForm>`</div>

## Example:

<div xmlns="http://www.w3.org/1999/xhtml">`<AddForm>`  
`<span style="font-family: monospace;"><span style="font-size: 9pt;">  ...</span></span>  
<span style="color: #ff0000;"><span style="font-family: monospace;"><span style="font-size: 9pt;"><Panel ShowIf='[[Join("{0}=Kelly",[[Url:name]])]]' ></span></span></span>  
<span style="color: #ff0000;"><span style="font-family: monospace;"><span style="font-size: 9pt;"></span></span></span>  
<span style="color: #ff0000;"><span style="font-family: monospace;"><span style="font-size: 9pt;"></Panel></span></span></span>`  

`   <AddButton Text="Add"/>&nbsp;<CancelButton Text="Cancel"/>`  

`</AddForm>`</div>

[Back to top](#top)