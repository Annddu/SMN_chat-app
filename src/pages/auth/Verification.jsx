import React from 'react'
import Logo from '../../components/Logo'
import { Link } from 'react-router-dom'

export default function Verification() {
  return (
    <div>
        <div>
            <div>

                <div>
                    <div>
                        <Link to="/">
                            <Logo/>
                        </Link>

                        <div>
                            <h1>
                                Verify your account
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
