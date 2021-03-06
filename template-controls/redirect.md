# `<xmod:Redirect>`

The Redirect tag is a great way to extend XMod Pro's ability to interact with other applications and services. Its sole purpose is to send data to other URL's. You tell it which data to send by adding `<Field>` tags. At run-time, it renders as a hyperlink, a push-button, or a clickable image (depending on its settings) and, when clicked will send the information it finds in the `<Field>` tags to URL you specify. Data can be sent via HTTP POST (the same method used when you click the Submit button on a standard web form) or HTTP GET (which passes your data as parameters in the URL).

## Syntax
```html
<xmod:Redirect
    Display="Button|Linkbutton|ImageButton"
    ImageUrl="url"
    ImageAlign="absbottom|absmiddle|baseline|bottom|left|middle|right|texttop|top"
    Method="Get|Post"
    OnClientClick="javascript"
    Style="string"
    Target="url"
    Text="string"
    ToolTip="string"
    Visible="True|False"
    Width="size">  

    <Field Name="string" Value="string" />
    additional fields as needed ...

</xmod:Redirect>
```

## Remarks

*   **Display**: Determines how the button will be displayed. The default value is LinkButton. Valid values are:
    *   `Button`: displays as a push-button
    *   `LinkButton`: displays as a hyperlink
    *   `ImageButton`: displays as a clickable image  

*   **Method**: Determines how the data will be sent. The default value is Post. Valid values are:
    *   `Get`: data is sent via the HTTP GET method (i.e. via URL parameters)
    *   `Post`: data is sent via the HTTP POST method. 

*   **Text**: When Display is set to LinkButton or Button, this will be the text that is displayed to to the user. If Display is set to ImageButton then the text will be used as the image's alt. text.  

*   **Target**: A valid URL. This is the destination to which the button's data will be sent. As with many properties in XMod Pro tags, you can use the tilde (`~`) character to represent the website root - e.g. ~/mypage.aspx  

*   **ImageUrl**: A valid URL pointing to an image file. This attribute is only used when Display is set to ImageButton.  

*   **ImageAlign**: A value determining how the image will be aligned relative to nearby elements in the page. It is ignored unless display is ImageButton. Valid values are:
    *   `absbottom` - the lower edge of the image is aligned with the lower edge of the largest element on the same line
    *   `absmiddle` - the middle of the image is aligned with the middle of the largest element on the same line
    *   `baseline` - the lower edge of the image is aligned with the lower edge of the first line of text
    *   `bottom` - the lower edge of the image is aligned with the lower edge of the first line of text
    *   `left` - the image is aligned on the left edge with the text wrapping on the right
    *   `middle` - the middle of the image is aligned with the lower edge of the first line of text
    *   `right` - the image is aligned on the right edge with text wrapping on the left
    *   `texttop` - the upper edge of the image is aligned with the upper edge of the highest text on the same line
    *   `top` - the upper edge of the image is aligned with the upper edge of the highest element on the same line  

*   **OnClientClick**: Should you wish to perform some action on the client when the control is clicked, add your Javascript function call or script in this attribute. If your script returns _false_ the control will not perform its normal processing. If you return true then the control will perform its normal processing.  

## Example
```html {9-11}
<div>
  <table width="100%">
    <tr>
      <td colspan="2">
        <!-- DEPARTMENTS TEMPLATE -->
        <xmod:Template Id="Departments">
          <ListDataSource CommandText="SELECT ProductId, ProductName FROM XMPDemo_Products ORDER BY ProductName" />
          <ItemTemplate>
            <xmod:Redirect text="Purchase" target="http://mysite.com/purchase.aspx">
              <Field Name="pid" Value='[[ProductId]]' />
            </xmod:Redirect>
          </ItemTemplate>
        </xmod:Template>
      </td>
    </tr>
  </table>
</div>  
```

