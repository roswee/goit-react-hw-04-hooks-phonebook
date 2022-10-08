import PropTypes from 'prop-types'

export const Filter = ({handleFinder}) => {

        return (
          <>
          Find contacts by name 
              <input name="filter" onChange={handleFinder}></input>
          </>

        )
    }

Filter.propTypes = {
  handleFinder: PropTypes.func
}