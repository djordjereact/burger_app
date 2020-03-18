import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxilliary/Auxiliary';

const withErrorHandler = (WrappedComponet, axios) => {
    return class extends Component {
        state = {
          error: null
        };
