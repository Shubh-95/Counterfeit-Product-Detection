// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.6.0;

contract SupplyChain {
    event Added(uint256 index);

    struct State {
        string description;
        address person;
    }

    struct Product {
        address creator;
        string productName;
        uint256 productId;
        string date;
        string quality;
        uint256 totalStates;
        mapping(uint256 => State) positions;
    }

    mapping(uint256 => Product) allProducts;
    uint256 items = 0;

    function uint2str(uint256 _i)
        internal
        pure
        returns (string memory _uintAsString)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    function concat(string memory _a, string memory _b)
        public
        pure
        returns (string memory)
    {
        bytes memory bytes_a = bytes(_a);
        bytes memory bytes_b = bytes(_b);
        string memory length_ab = new string(bytes_a.length + bytes_b.length);
        bytes memory bytes_c = bytes(length_ab);
        uint256 k = 0;
        for (uint256 i = 0; i < bytes_a.length; i++) bytes_c[k++] = bytes_a[i];
        for (uint256 i = 0; i < bytes_b.length; i++) bytes_c[k++] = bytes_b[i];
        return string(bytes_c);
    }

    function newItem(
        string memory _text,
        string memory _date,
        string memory p_quality,
        uint256 pid
    ) public returns (bool) {
        Product memory newItem = Product({
            creator: msg.sender,
            totalStates: 0,
            productName: _text,
            productId: pid,
            date: _date,
            quality: p_quality
        });
        allProducts[pid] = newItem;
        items = items + 1;
        emit Added(items - 1);
        return true;
    }

    function addState(uint256 _productId, string memory info)
        public
        returns (string memory)
    {
        require(_productId <= items);

        State memory newState = State({person: msg.sender, description: info});

        allProducts[_productId].positions[
            allProducts[_productId].totalStates
        ] = newState;

        allProducts[_productId].totalStates =
            allProducts[_productId].totalStates +
            1;
        return info;
    }

    function searchProduct(uint256 _productId)
        public
        view
        returns (string memory)
    {
        require(_productId <= items);
        string memory output = "Product Name: ";
        output = concat(output, allProducts[_productId].productName);
        output = concat(output, "<br>Manufacture Date: ");
        output = concat(output, allProducts[_productId].date);
        output = concat(output, "<br>Product Quality: ");
        output = concat(output, allProducts[_productId].quality);
        for (uint256 j = 0; j < allProducts[_productId].totalStates; j++) {
            output = concat(output, "<br>Location ");
            output = concat(output, uint2str(j + 1));
            output = concat(output, ": ");
            output = concat(
                output,
                allProducts[_productId].positions[j].description
            );
        }
        return output;
    }
}
