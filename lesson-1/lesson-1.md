Class 2026-01-09

*Name Selector*

*ID Selectors* - _#intro_ the element with the attribute id="intro". It should be just only one element using the ID.

*Class Selectors* - _.error_ Any element with the attribute class="error".

*Contextual Selectors* - _section h1_ or _header h2 em_

*Grouped Selectors* - _h1, h2, h3_

*Pseudo-classes* - _a:link_ and _a:visited_ and _a:hover_ sort of classes. For example, a unvisited hyperlink following the borwser history. Based on certain states.

*Structural Pseudo-classes* - _li:nth-child(4)_  the fourth of a set of li elements.  _li:nth-child(4n)_  every fourth of a set of li elements.  _li:nth-child(4n+1)_  every fourth of a set of li elements offset by one.  _li:nth-child(odd)_  every odd li.
_p:nth-of-type(3)_ the third element of type p in a set of elements.
first-child and last-child -  _p:first-child_  and  _p:last-child_
first-of-type and last-of-type -  _div:first-of-type_
only-child -  _h2:only-child_  the only content piece.
empty -  _td:empty_  element that has no children.
not - _*:not(a)_

*Pseudo-Elements* - double :: to be consider element
first-line and first-letter - _p::first-line_
befor and after - _h1::before {contet: "Note- ";}_

*Combinators*
child - _body > p_ direct descendant
adjacent and general sibling - _h2 + p_ any p element that immediately follows an h2 and _h2 ~ p_ any p element that shares the same parent as an h2 element, but doesn’t necessarily follow it immediately.

*Attribute Selectors* - attribute value equal to or href or contains
_a[href]_
_p[title=”intro”]_ equal to
_a[href*="georgiancollege"]_ contains
_a[href^=”http://”]_ begins with
_a[href$=".pdf"]_ ends with


DRY - Don't Repeat Yourself
