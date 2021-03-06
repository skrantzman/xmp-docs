# `<xmod:IfEmpty>`

(New to version 4.2) The IfEmpty tag is a quick way to display content only if there is no value in a column. In other words if the value is an empty string ("") or a Null value, then the content of the IfEmpty tag will be rendered out to the page.

## Syntax
```html
<xmod:IfEmpty 
    Value="string">

...Content Goes Here...
</xmod:IfEmpty>
```

## Remarks

*   **Value**: This can be a hard-coded string value theoretically, however, the main purpose is to accept a Field Token. NOTE, when using a Field Token, you must use single quotes rather than double quotes to delimit it:  
    `<xmod:IfEmpty Value='[[MyField]]'>...</xmod:IfEmpty>`

## Example
```html {16-18}
<div>
  <table width="100%">
    <tr>
      <td width="250" valign="top">

        <!-- EMPLOYEES TEMPLATE -->

        <xmod:Template Id="Employees">
          <DetailDataSource CommandText="SELECT * FROM XMPDemo_Employees WHERE EmployeeId = @EmpID">
            <Parameter Name="EmployeeId" Alias="EmpID" />
          </DetailDataSource>

          <DetailTemplate>
            <h1>Employee Profile</h1>
            <h3>[[FirstName]] [[LastName]]</h3>
            <xmod:IfEmpty Value='[[imageUrl]]'>
              <img src="/images/NoImage.png" />
            </xmod:IfEmpty>
            <xmod:IfNotEmpty Value='[[imageUrl]]'>
              <img src="[[imageUrl]] />
            </xmod:IfNotEmpty>
            <h4>Biography:</h4>
            <div>[[Bio]]</div>
            <xmod:MetaTags>
              <Title>Employee Profile for [[FirstName]] [[LastName]]</Title>
              <Keywords append="true">[[FirstName]],[[LastName]]</Keywords>
            </xmod:MetaTags>
          </DetailTemplate>
        </xmod:Template>
      </td>
    </tr>
  </table>
</div>
```