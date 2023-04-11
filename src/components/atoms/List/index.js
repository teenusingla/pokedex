import React from 'react';
import PropTypes from 'prop-types';
import { Node } from 'react';

const List = ({ ListType, className, children, ...others }) => (
  <ListType className={className} {...others}>
    {children}
  </ListType>
);

List.defaultProps = {
  ListType: 'ul',
  className: '',
  children: Node,
};

List.propTypes = {
  ListType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.Node,
};

export default List;
